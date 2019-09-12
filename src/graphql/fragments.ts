import { graphql } from "gatsby"

export const query = graphql`
  fragment FileInfo on File {
    ext
    extension
    base
    relativePath
    publicURL
    uid
    sourceInstanceName
    size
    root
    relativeDirectory
    rdev
    prettySize
    nlink
    name
    mtimeMs
    mtime
    modifiedTime
    mode
    ino
    id
    gid
    dir
    dev
    ctimeMs
    ctime
    changeTime
    children {
      id
    }
    birthtimeMs
    birthtime
    birthTime
    atimeMs
    atime
    absolutePath
    accessTime
    parent {
      id
    }
    childMarkdownRemark {
      id
    }
    childImageSharp {
      fluid(maxWidth: 2048, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  fragment ClientsInfo on MarkdownRemarkFrontmatterClients {
    title
    items {
      title
      logo {
        ...FileInfo
      }
    }
  }
  fragment WorkInfo on MarkdownRemarkFrontmatterWork {
    title
    subtitle
    items {
      title
      logo {
        ...FileInfo
      }
      description
    }
  }
  fragment ReferencesInfo on MarkdownRemarkFrontmatterReferences {
    title
    items {
      title
      subtitle
      description
      image {
          ...FileInfo
      }
    }
  }
  fragment TechnologiesInfo on MarkdownRemarkFrontmatterTechnologies {
    title
    description
    items {
      logo {
        ...FileInfo
      }
    }
  }
  fragment NewsInfo on MarkdownRemarkFrontmatterNews {
    title
    items {
      description
      title
    }
  }
  fragment BlogInfo on MarkdownRemark {
    excerpt(pruneLength: 400)
    id
    fields {
      slug
    }
    frontmatter {
      title
      locale
      description
      templateKey
      date(formatString: "MMMM DD, YYYY")
      image {
        ...FileInfo
      }
    }
  }
  fragment InstaNodeInfo on InstaNode {
    id
    caption
    likes
    mediaType
    original
    preview
    timestamp
    type
    username
    dimensions {
      height
      width
    }
    thumbnails {
      config_height
      config_width
      src
    }
  }
  fragment ContactInfo on MarkdownRemarkFrontmatterContact {
    title
                                contactPerson {
                                    email
                                    linkedIn
                                    name
                                    role
                                    phone
                                    image {
                                        ...FileInfo
                                    }
                                }
                                address {
                                    city
                                    lat
                                    lng
                                    street
                                    zip
                                }
  }
`