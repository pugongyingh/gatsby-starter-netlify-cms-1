import { graphql, useStaticQuery } from "gatsby";

const useBlogPosts = () => {
    const query = useStaticQuery(
        graphql`
            query BlogRollQuery {
                allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] }
                    filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
                ) {
                edges {
                    node {
                    excerpt(pruneLength: 400)
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        templateKey
                        date(formatString: "MMMM DD, YYYY")
                        image {
                        childImageSharp {
                            fluid(maxWidth: 120, quality: 100) {
                            ...GatsbyImageSharpFluid
                            }
                        }
                        }
                    }
                    }
                }
                }
            }
    `
    );
    return query.allMarkdownRemark.edges;
}

export default useBlogPosts;