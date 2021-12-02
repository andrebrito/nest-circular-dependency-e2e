export default process.env.NODE_ENV === 'test'
  ? () => ({
      nodeEnv: process.env.NODE_ENV || 'test',
      prisma: {
        databaseUrl:
          process.env.DATABASE_URL ||
          'postgresql://root:root@localhost:5432/g10_relatorios_gerenciais?schema=public',
      },
      server: {
        port: parseInt(process.env.PORT) || 3030,
      },
      urls: {
        api: process.env.API_URL || 'http://localhost:3030',
        web: process.env.WEB_URL || 'http://localhost:3000',
        sso: process.env.SSO_URL || 'https://api.g10-sso.eurekahomolog.xyz',
      },
      clientId: process.env.CLIENT_ID || '8d47576b-de93-429a-a1bb-e63c790075b8',
      authGuardEnabled: 'false',
    })
  : () => ({
      nodeEnv: process.env.NODE_ENV || 'test',
      prisma: {
        databaseUrl:
          process.env.DATABASE_URL ||
          'postgresql://root:root@localhost:5432/g10_relatorios_gerenciais?schema=public',
      },
      server: {
        port: parseInt(process.env.PORT) || 3030,
      },
      urls: {
        api: process.env.API_URL || 'http://localhost:3030',
        web: process.env.WEB_URL || 'http://localhost:3000',
        sso: process.env.SSO_URL || 'https://api.g10-sso.eurekahomolog.xyz',
      },
      clientId: process.env.CLIENT_ID || '8d47576b-de93-429a-a1bb-e63c790075b8',
      authGuardEnabled: 'false',
    });
