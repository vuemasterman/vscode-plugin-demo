import { CompletionItem, CompletionItemKind } from "vscode";

export const generateCssClassname = () => {
  return [
    { label: "lmn-mt-3", kind: CompletionItemKind.Class },
  ] as CompletionItem[];
};
