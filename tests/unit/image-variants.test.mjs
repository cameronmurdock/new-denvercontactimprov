import test from "node:test";
import assert from "node:assert/strict";
import { pickVariant, socialImageFileName, targetWidths, variantFileName } from "../../src/lib/image-variants.mjs";

const CONFIGURED = [640, 828, 1200, 1920, 96, 256, 384];

test("targetWidths gives a large photo every configured width and nothing wider", () => {
  assert.deepEqual(targetWidths(3600, CONFIGURED), [96, 256, 384, 640, 828, 1200, 1920]);
});

test("targetWidths never upscales: a small image stops at its own width", () => {
  assert.deepEqual(targetWidths(500, CONFIGURED), [96, 256, 384, 500], "500px source gets the narrower sizes plus itself");
  assert.deepEqual(targetWidths(64, CONFIGURED), [64], "a source narrower than every size gets one variant at its own width");
});

test("targetWidths does not duplicate a width the source matches exactly", () => {
  assert.deepEqual(targetWidths(1200, CONFIGURED), [96, 256, 384, 640, 828, 1200]);
});

test("targetWidths rejects a width that is not a positive integer", () => {
  assert.throws(() => targetWidths(0, CONFIGURED), RangeError, "zero width");
  assert.throws(() => targetWidths(undefined, CONFIGURED), RangeError, "missing width, as when metadata could not be read");
  assert.throws(() => targetWidths(12.5, CONFIGURED), RangeError, "fractional width");
});

test("targetWidths rejects an empty configuration", () => {
  assert.throws(() => targetWidths(800, []), RangeError);
});

test("variantFileName keeps the stem, shortens the hash and swaps the extension", () => {
  assert.equal(
    variantFileName("hero-main.jpg", "1a2b3c4d5e6f7a8b9c0d", 640),
    "hero-main.1a2b3c4d-640.webp",
  );
});

test("variantFileName only treats the last dot as the extension", () => {
  assert.equal(variantFileName("photo.final.png", "abcdef0123456789", 96), "photo.final.abcdef01-96.webp");
  assert.equal(variantFileName("noextension", "abcdef0123456789", 96), "noextension.abcdef01-96.webp");
});

test("pickVariant returns the narrowest variant that covers the request", () => {
  const variants = { 96: "a-96.webp", 640: "a-640.webp", 1200: "a-1200.webp" };
  assert.equal(pickVariant(variants, 96), "a-96.webp", "an exact match is used");
  assert.equal(pickVariant(variants, 400), "a-640.webp", "a request between sizes rounds up");
  assert.equal(pickVariant(variants, 641), "a-1200.webp");
});

test("pickVariant falls back to the widest variant when the request exceeds them all", () => {
  assert.equal(pickVariant({ 96: "a-96.webp", 500: "a-500.webp" }, 1920), "a-500.webp");
});

test("pickVariant orders widths numerically, not as strings", () => {
  const variants = { 1200: "a-1200.webp", 96: "a-96.webp", 640: "a-640.webp" };
  assert.equal(pickVariant(variants, 100), "a-640.webp", "'1200' sorts before '640' as text; it must not be chosen");
});

test("pickVariant returns null when an image has no variants", () => {
  assert.equal(pickVariant({}, 640), null);
});

test("socialImageFileName puts the source hash before the extension", () => {
  assert.equal(socialImageFileName("og-default.jpg", "9f8e7d6c5b4a39281706"), "og-default.9f8e7d6c.jpg");
});

test("socialImageFileName refuses an output name with no extension", () => {
  assert.throws(() => socialImageFileName("og-default", "9f8e7d6c5b4a"), RangeError);
  assert.throws(() => socialImageFileName(".jpg", "9f8e7d6c5b4a"), RangeError, "a bare extension has no name to keep");
});
