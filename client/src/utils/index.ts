import * as vscode from "vscode";
import { LanguageClient } from "vscode-languageclient/node";
import { IcgdsCssCompletionProvider } from "../services/completionProvider";
const registerCompletion = () => {
  const disposable = vscode.languages.registerCompletionItemProvider(
    { language: "typescriptreact", scheme: "file" },
    new IcgdsCssCompletionProvider(),
    `"`
  );
  return [disposable];
};

export const register = (
  ctx: vscode.ExtensionContext,
  client: LanguageClient
) => {
  const disposables = [...registerCompletion()];
  ctx.subscriptions.push(client.start as any, ...disposables);
};
