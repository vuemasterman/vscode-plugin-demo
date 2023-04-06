import {
  CompletionItemProvider,
  TextDocument,
  Position,
  CancellationToken,
  CompletionItem,
} from "vscode";
import { generateCssClassname } from "../utils/completion";

export class IcgdsCssCompletionProvider implements CompletionItemProvider {
  provideCompletionItems(
    document: TextDocument,
    position: Position,
    token: CancellationToken
  ) {
    const lineText = document.lineAt(position.line).text;
    const quotes = lineText.match(/["']{1}/g);

    if (!quotes || quotes.length < 2) {
      return [];
    }

    const [startQuote, endQuote] = quotes;

    if (
      position.character < lineText.indexOf(startQuote) ||
      position.character > lineText.lastIndexOf(endQuote)
    ) {
      return [];
    }

    // const content = lineText.substring(
    //   lineText.indexOf(startQuote) + 1,
    //   lineText.lastIndexOf(endQuote)
    // );

    const classnameCompletionItem = generateCssClassname().map(
      (item) => new CompletionItem(item.label)
    );
    return [...classnameCompletionItem];
  }
}
