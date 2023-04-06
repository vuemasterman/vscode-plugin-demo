import * as vscode from "vscode";
import { Disposable, LanguageClient } from "vscode-languageclient/node";
import { IcgdsCssCompletionProvider } from "../services/completionProvider";
const registerCompletion = () => {
  const disposables: Disposable[] = [];
  disposables.push(
    vscode.languages.registerCompletionItemProvider(
      { language: "typescriptreact", scheme: "file" },
      new IcgdsCssCompletionProvider(),
      `"`,
      `\``,
      ` `
    )
  );
  return disposables;
};

export const register = (
  ctx: vscode.ExtensionContext,
  client: LanguageClient
) => {
  const disposables = [...registerCompletion()];
  ctx.subscriptions.push(client.start as any, ...disposables);
};
