import { graphql, Link, StaticQuery } from "gatsby";
import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import { MarkdownRemarkEdge, Maybe, Query } from "../../graphql/types";
import starkysIcon from "../../img/starkys-logo-proper.svg";
import styled, { SCP } from "../../styles/theme";
import PreviewCompatibleImage from "../CMS/PreviewCompatibleImage";

interface P extends SCP {
  footer: MarkdownRemarkEdge[];
  locale: Maybe<string>;
}

const FooterTemplate: React.FC<P> = ({ className, footer, locale }) => {
  const localizedFooter = footer.find(
    config => config.node.frontmatter!.locale === locale
  );
  if (!localizedFooter) {
    return null;
  }
  return (
    <footer className={className}>
      <Grid className="container">
        <Row className="content-wrap">
          <Col lg={4}>
            <Link to="/#header">
              <PreviewCompatibleImage
                image={starkysIcon}
                alt="Starky's Club"
                className="logo"
              />
            </Link>
          </Col>
          <Col lg={4} className="copyright">
            {localizedFooter!.node.frontmatter!.footer
              ? localizedFooter!.node.frontmatter!.footer.copy
              : null}
          </Col>
          {localizedFooter!.node.frontmatter!.footer &&
            localizedFooter!.node.frontmatter!.footer.social && (
              <Col lg={4} className="social">
                {localizedFooter!.node.frontmatter!.footer.social.map(
                  social => (
                    <a
                      href={social!.link!}
                      key={social!.link!}
                      title="Facebook"
                    >
                      <PreviewCompatibleImage
                        className="social__icon"
                        image={social!.image!}
                        alt="TODO:"
                      />
                    </a>
                  )
                )}
              </Col>
            )}
        </Row>
      </Grid>
    </footer>
  );
};

const StyledFooter = styled(FooterTemplate)`
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  display: flex;
  padding: 2rem 0;

  @media ${props => props.theme.screen.tablet} {
    padding: 2rem 0;
  }
  .content-wrap {
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    @media ${props => props.theme.screen.tablet} {
      align-items: initial;
      text-align: left;
      flex-direction: row;
    }
  }
  .copyright {
    display: flex;
    align-items: center;
    width: 270px;
    @media ${props => props.theme.screen.laptop} {
      width: 100%;
    }
  }
  .social {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &__icon {
      width: 20px;
      height: 20px;
      padding: 10px;

      &:hover {
        opacity: 0.5;
      }
    }
  }
  .container {
    @media ${props => props.theme.screen.laptop} {
      width: 1410px !important;
    }
  }

  .logo {
    width: 78px;
    height: 85px;
  }
`;

const Footer: React.SFC<Omit<P, "footer">> = props => {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/static/config//" } }
          ) {
            edges {
              node {
                frontmatter {
                  locale
                  footer {
                    copy
                    social {
                      link
                      image {
                        ...FileInfo
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data: Query) => (
        <StyledFooter footer={data.allMarkdownRemark.edges} {...props} />
      )}
    />
  );
};

export default Footer;
