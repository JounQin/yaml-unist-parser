import assert = require("assert");
import { Context } from "../transform";
import { QuoteValue } from "../types";
import { createCommentAttachableNode, createContentNode } from "../utils";

export function transformQuoteValue(
  quoteValue: yaml.QuoteValue,
  context: Context,
): QuoteValue {
  assert(quoteValue.valueRange !== null);
  assert(typeof quoteValue.strValue === "string");
  return {
    type: "quoteBase",
    value: quoteValue.strValue as string,
    position: context.transformRange(quoteValue.valueRange!),
    ...createCommentAttachableNode(),
    ...createContentNode(),
  };
}
