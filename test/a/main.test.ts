import fs from 'node:fs/promises';

import { ImageResponse } from '@vercel/og';
import component from '../../src/aaaa';

describe('Command test', () => {
  it('run command', async () => {
    const response = new ImageResponse(component(), {
      width: 800,
      height: 600,
    });
    await fs.writeFile('out.png', Buffer.from(await response.arrayBuffer()));
  });
});
