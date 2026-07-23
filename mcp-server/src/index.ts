import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

const server = new Server(
  {
    name: 'web-portfolio-mcp',
    version: '1.0.0',
  },
  {
    capabilities: {
      resources: {},
      tools: {},
    },
  }
);

// Define Resources
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return {
    resources: [
      {
        uri: 'portfolio://spec/architecture',
        name: 'Architecture & Project Setup Spec',
        mimeType: 'text/markdown',
        description: 'Detail arsitektur proyek, folder structure, dan konfigurasi Astro/Tailwind.',
      },
      {
        uri: 'portfolio://spec/design-system',
        name: 'Design System & Styling Spec',
        mimeType: 'text/markdown',
        description: 'Token CSS, aturan Soft Brutalism / Editorial Swiss Style, dan Tailwind config.',
      },
      {
        uri: 'portfolio://spec/content-collections',
        name: 'Content Collections Spec',
        mimeType: 'text/markdown',
        description: 'Skema Zod dan contoh MDX case study untuk proyek & pengalaman.',
      },
    ],
  };
});

server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const uri = request.params.uri;
  if (uri === 'portfolio://spec/architecture') {
    return {
      contents: [
        {
          uri,
          mimeType: 'text/markdown',
          text: `# Architecture Spec\nStack: Astro v4+ (SSG) + Tailwind CSS + TypeScript + MDX\nAliases: @components, @layouts, @assets, @utils`,
        },
      ],
    };
  }
  if (uri === 'portfolio://spec/design-system') {
    return {
      contents: [
        {
          uri,
          mimeType: 'text/markdown',
          text: `# Design System Spec\nStyle: Swiss Graphic + Soft Brutalism\nColors: --bg-primary (#FAF8F5), --text-primary (#1A1A18), --accent-terracotta (#C85A32), --accent-sage (#2D5A4C)\nClasses: .border-editorial, .card-tactile`,
        },
      ],
    };
  }
  if (uri === 'portfolio://spec/content-collections') {
    return {
      contents: [
        {
          uri,
          mimeType: 'text/markdown',
          text: `# Content Collections Spec\nCollections: projects (content, MDX), experience (data, JSON)\nZod schemas enforce categories: Frontend, Fullstack, System Architecture, Tooling`,
        },
      ],
    };
  }
  throw new Error(`Resource not found: ${uri}`);
});

// Define Tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'get_design_tokens',
        description: 'Mengambil token warna CSS dan spesifikasi styling Soft Brutalism untuk portofolio.',
        inputSchema: {
          type: 'object',
          properties: {
            theme: { type: 'string', enum: ['light', 'dark', 'all'] },
          },
        },
      },
      {
        name: 'validate_project_metadata',
        description: 'Memvalidasi objek metadata studi kasus proyek apakah sesuai dengan Zod Schema.',
        inputSchema: {
          type: 'object',
          properties: {
            title: { type: 'string' },
            category: { type: 'string', enum: ['Frontend', 'Fullstack', 'System Architecture', 'Tooling'] },
            techStack: { type: 'array', items: { type: 'string' } },
          },
          required: ['title', 'category', 'techStack'],
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  if (name === 'get_design_tokens') {
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(
            {
              light: {
                bgPrimary: '#FAF8F5',
                bgSecondary: '#F0EDE6',
                textPrimary: '#1A1A18',
                terracotta: '#C85A32',
                sage: '#2D5A4C',
              },
              dark: {
                bgPrimary: '#121314',
                bgSecondary: '#1A1C1E',
                textPrimary: '#EDEDEB',
                terracotta: '#E07A5F',
                sage: '#52B788',
              },
              classes: {
                cardTactile: 'card-tactile (shadow-[3px_3px_0px_#1A1A18], 1px border)',
                borderEditorial: 'border-editorial (1px solid var(--border-color))',
              },
            },
            null,
            2
          ),
        },
      ],
    };
  }

  if (name === 'validate_project_metadata') {
    const { category, title, techStack } = args as any;
    const validCategories = ['Frontend', 'Fullstack', 'System Architecture', 'Tooling'];
    if (!validCategories.includes(category)) {
      return {
        isError: true,
        content: [
          {
            type: 'text',
            text: `Invalid category '${category}'. Must be one of: ${validCategories.join(', ')}`,
          },
        ],
      };
    }
    return {
      content: [
        {
          type: 'text',
          text: `Metadata is valid for project "${title}" in category "${category}" with tech stack [${techStack.join(', ')}].`,
        },
      ],
    };
  }

  throw new Error(`Tool not found: ${name}`);
});

async function run() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

run().catch((err) => {
  console.error('Failed to start MCP Server:', err);
  process.exit(1);
});
