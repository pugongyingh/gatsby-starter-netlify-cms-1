import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import { MarkdownRemarkEdge, Maybe, Query } from "../../graphql/types";
import styled, { SCP } from "../../styles/theme";
import ContactCard from "./ContactCard";
import StyledContactForm from "./Form";


interface P extends SCP {
    contacts: MarkdownRemarkEdge[];
    locale: Maybe<string>;
}

const ContactTemplate: React.FC<P> = ({ className, contacts, locale }) => {
    const localizedContact = contacts.find(
        (contact) => contact.node.frontmatter!.locale === locale
    );
    if (!localizedContact) {
        return null;
    }
    return (
        <Grid className={className}>
            <h1>{localizedContact.node.frontmatter!.contact!.title}</h1>
            <Row className="contact-wrap">
                <Col xs={12} sm={6}>
                    <StyledContactForm />
                </Col>
                {localizedContact.node.frontmatter!.contact!.contactPerson &&
                    <Col xs={12} sm={6}>
                        <Row>
                            {localizedContact.node.frontmatter!.contact!.contactPerson.map((person) => (
                                <Col xs={12} key={person!.name}>
                                    <ContactCard
                                        image={person!.image!}
                                        alt={person!.name!}
                                        name={person!.name!}
                                        position={person!.role!}
                                        email={person!.email!}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Col>}
            </Row>
        </Grid>
    );
};

const StyledContact = styled(ContactTemplate)`

&__wrap {
      flex-direction: column-reverse;

      @media ${props => props.theme.screen.laptop} {
        flex-direction: row;
      }
    }

    &__image {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      @media ${props => props.theme.screen.mobileL} {
        display: inline-block;
      }

      &-wrap {
        width: 100px;
        height: 100px;
        border-radius: 100px;
      }
    }

    &__cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      align-items: center;

      @media ${props => props.theme.screen.mobileL} {
        display: inline-block;
        text-align: left;
      }
    }
`;

const Contact: React.SFC<Omit<P, "contacts">> = props => {
    return (
        <StaticQuery
            query={graphql`
                query ContactQuery {
                allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/static/config//"}}) {
                    edges {
                    node {
                        frontmatter {
                            title
                            locale
                            contact {
                                address {
                                    city
                                    gps
                                    street
                                    zip
                                }
                            }
                        }
                    }
                    }
                }
                }
            `}
            render={(data: Query) => <StyledContact contacts={data.allMarkdownRemark.edges} {...props} />}
        />
    );
};

export default Contact;

