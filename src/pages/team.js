import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { RichText } from "prismic-reactjs";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import colors from "styles/colors";
import Layout from "components/Layout";

const TeamContainer = styled('div')`
   max-width: 1140px;
   margin: 0 auto;
`
const TeamHeroSection = styled('header')`
   display: flex;
   height: 600px;
   width: 100%;
   justify-content: center;
   align-items: center;
   background-size: cover;
   margin-bottom: 60px;
   @media(max-width: ${dimensions.maxwidthMobile}px) {
       height: 300px;
   }
`
const TeamHeroInner = styled('div')`
    max-width: 800px;
    width: 100%;
    max-height: 250px;
    height: 100%;
    background-color: rgba(255,255,255,0.90);
    margin: 0 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: ${dimensions.maxwidthMobile}px) {
       max-height: 150px;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Gelasio', serif;
        &::after {
            content: "";
            display: block;
            width: 30px;
            height: 2px;
            background-color: ${colors.green800};
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 0;
            margin-top: 23px;
        }
    }
`
const TeamBodySection = styled('div')`
    font-family: 'Gelasio', serif;
    margin-bottom: 60px;
    padding: 0 20px;
    h1 {
        text-align: center;
        font-size: 2.4rem;
        &::after {
            content: "";
            display: block;
            width: 30px;
            height: 2px;
            background-color: ${colors.green800};
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 0;
            margin-top: 23px;
        }
    }
    h2, h3, h4 {
        text-align: center;
        font-style: italic;
    }
`

const TeamMemberSection = styled('div')`
    padding: 0 20px;
`

const TeamMemberCard = styled('div')`
    font-family: 'Gelasio', serif;
    margin-bottom: 40px; 
    img {
        float: left;
        margin-right: 20px;
        margin-bottom: 10px;
        max-width: 160px;
        max-height: 160px;
    }
    .member-description {
        min-height: 150px;
    }

`

const Team = ({ teams, meta, home }) => (
    <>
        <Helmet
            title={`Team | Tibetan Resettlement Stories`}
            titleTemplate={`%s | Team | Tibetan Resettlement Stories`}
            meta={[
                {
                    name: `description`,
                    content: meta.description,
                },
                {
                    property: `og:title`,
                    content: `Team | Tibetan Resettlement Stories`,
                },
                {
                    property: `og:description`,
                    content: meta.description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: meta.author,
                },
                {
                    name: `twitter:title`,
                    content: meta.title,
                },
                {
                    name: `twitter:description`,
                    content: meta.description,
                },
            ].concat(meta)}
        />
        <Layout productImage={home.hero_background.url}>
            <TeamContainer>
                <TeamHeroSection style={{backgroundImage: "url(" + teams.team_title_background.url + ")"}}>
                    <TeamHeroInner>
                        {RichText.render(teams.team_title.raw)}
                    </TeamHeroInner>
                </TeamHeroSection>
                <TeamBodySection>
                    {RichText.render(teams.team_body.raw)}
                </TeamBodySection>
                <TeamMemberSection>
                    {teams.team_member.map((member, i) => (
                        <TeamMemberCard key={i}>
                            <img 
                                src={member.team_member_picture.url}        
                            />
                            <strong>{RichText.render(member.team_member_name.raw)}</strong>
                            <div className="member-description">{RichText.render(member.team_memeber_description.raw)}</div>
                        </TeamMemberCard>
                    ))}
                </TeamMemberSection>
            </TeamContainer>
        </Layout>
    </>
);

export default ({ data }) => {
    const teams = data.allPrismicTeam.edges[0].node.data;
    const meta = data.site.siteMetadata;
    const home = data.allPrismicHomepage.nodes.slice(0, 1).pop()

    if (!teams) return null;

    return (
        <Team teams={teams} meta={meta} home={home.data} />
    )
}

Team.propTypes = {
    teams: PropTypes.object.isRequired,
};

export const query = graphql`
    {
        allPrismicHomepage {
            nodes {
            data {
                hero_background {
                url
                }
            }
            }
        }
        allPrismicTeam {
            edges {
            node {
                data {
                team_body {
                    html
                    text
                    raw
                }
                team_member {
                    team_member_name {
                    html
                    text
                    raw
                    }
                    team_member_picture {
                    alt
                    copyright
                    url(imgixParams: {maxWidth: 50, maxHeight: 50})
                    }
                    team_memeber_description {
                    html
                    text
                    raw
                    }
                }
                team_title {
                    html
                    text
                    raw
                }
                team_title_background {
                    alt
                    copyright
                    url
                }
                }
            }
            }
        }
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`
