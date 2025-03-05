import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import ProductImageGallery from "../../src/components/ProductImageGallery";
import React from "react";

describe("ProductImageGallery", () => {
  it("should render nothing when passed array is empty", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should render list of images when array of images is passed", () => {
    const imageUrls = ["url1", "url2"];
    render(<ProductImageGallery imageUrls={imageUrls} />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(imageUrls.length);

    images.forEach((img, index) => {
      expect(img).toHaveAttribute("src", imageUrls[index]);
    });
  });
});
