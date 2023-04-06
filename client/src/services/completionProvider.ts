import * as vscode from "vscode";
import { generateCssClassname } from "../utils/completion";
export class IcgdsCssCompletionProvider
  implements vscode.CompletionItemProvider
{
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ) {
    const linePrefix = document
      .lineAt(position)
      .text.substring(0, position.character);
    if (linePrefix.endsWith('className="')) {
      const classnameCompletionItem = generateCssClassname().map(
        (item) => new vscode.CompletionItem(item.label)
      );
      return [...classnameCompletionItem];
    }
    return undefined;
  }
}
