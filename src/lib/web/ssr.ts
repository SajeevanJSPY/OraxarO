import path from 'path';
import { readFileSync } from 'fs';

interface TemplateContext {
    [key: string]: string;
}

function getComponentPath(component: string): string {
    return path.join(__dirname, 'public', 'components', `${component}.html`);
}

export function getComponent(component: string): string {
    let path = getComponentPath(component);
    return readFileSync(path, 'utf-8');
}

function getPagePath(page: string): string {
    return path.join(__dirname, 'public', 'pages', `${page}.html`);
}

export function renderPage(path: string, vars: TemplateContext = {}): string {
    if (path === '/') {
        path = 'index';
    }

    let filepath = getPagePath(path);
    let html = readFileSync(filepath, 'utf-8');

    for (const [key, value] of Object.entries(vars)) {
        html = html.replaceAll(`{{${key}}}`, value);
    }

    return html;
}

export function getAsset(pathname: string): Bun.BunFile {
    const assetPath = path.join(__dirname, 'public', `${pathname}`);
    return Bun.file(assetPath);
}
