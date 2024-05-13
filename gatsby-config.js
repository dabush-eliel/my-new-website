require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    flags: {
        DEV_SSR: true
    },
    siteMetadata: {
        title: `Eliel Dabush`,
        description: `Eliel Dabush personal website and tech blog`,
        author: `@dabush-eliel`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-tailwind`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#4dc0b5`,
                display: `minimal-ui`,
                icon: `src/images/code.png`
            }
        },
        `gatsby-plugin-postcss`,
        // {
        //     resolve: `gatsby-plugin-purgecss`,
        //     options: {
        //         tailwind: true,
        //         purgeOnly: [`src/css/style.css`]
        //     }
        // },
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-catch-links`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [] // just in case those previously mentioned remark plugins sound cool :)
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `UA-158103808-1`
            }
        },
        {
            resolve: `gatsby-plugin-linkedin-insight`,
            options: {
                partnerId: `4109793`,
                includeInDevelopment: false
            }
        },
        {
            resolve: `gatsby-plugin-facebook-pixel`,
            options: {
                pixelId: "507327087391134"
            }
        }
    ]
};
