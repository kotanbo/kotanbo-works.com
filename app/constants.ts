type SiteMetadata = {
  title: string
  description: string
  siteUrl: string
  siteLanguage: string
  contactUrl: string
  avatarAbsoluteUrl: string
  user: {
    name: string
    github: string
    qiita: string
  }
  gallery: {
    directoryName: string
  }
  backgroundColor: string
}

export const siteMetadata: SiteMetadata = {
  title: 'KOTANBO WORKS',
  description: '主に和歌山で活動しているフリーランスのエンジニアです。',
  siteUrl: 'https://kotanbo-works.com',
  siteLanguage: 'ja',
  contactUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLScYV-121hJ47O_whY2zF_4J3VLVgDAxNN1yWhuZgADQjb7rJA/viewform?usp=sf_link',
  avatarAbsoluteUrl: 'images/avatar.jpg',
  user: {
    name: 'KOTANBO WORKS',
    github: 'kotanbo',
    qiita: 'kotanbo',
  },
  gallery: {
    directoryName: 'nomad',
  },
  backgroundColor: '#283941',
}
