import fs from 'node:fs/promises';
import { createWriteStream } from 'node:fs';

const templatesFiles = (await fs.readdir('./src/templates'));
const validTemplatesFiles = templatesFiles.filter(template => template.endsWith('.svelte'));
const templates = validTemplatesFiles.map((template) => template.substring(0, template.length-'.svelte'.length));

const stream = createWriteStream('./src/templates/templateList.ts');
stream.write('');
for (let template of templates) {
    stream.write(`import ${template} from './${template}.svelte';\n`);
}
stream.write(`\nexport default { ${templates.join(', ')} };\n`);