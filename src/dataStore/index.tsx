import { 
    TiSocialFacebook, 
    TiSocialLinkedin,
    TiSocialYoutube 
} from "react-icons/ti";

export const footerData = [
    {
        "navigation" : [
            {
                "title": "home",
                url: "/",
            },{
                "title": "places",
                url: "/places",
            },{
                "title": "faqs",
                url: "/faqs",
            },
        ] 
    },{
        "story" : [
            {
                title: "Ngororo",
                url: "https://www.ncaa.go.tz/ngorongoro-crater/#see",
            },{
                title: "mikumi",
                url: "https://www.tanzaniaparks.go.tz/national_parks/mikumi-national-park",
            },{
                title: "Ruaha",
                url: "https://www.ruahanationalpark.com/",
            },{
                title: "kilimanjarp",
                url: "https://education.nationalgeographic.org/resource/kilimanjaro/",
            },{
                title: "Bagamoyo",
                url: "https://www.wmf.org/project/bagamoyo-historic-town",
            },
        ] 
    },{
        "socialLinks" : [
            {
                icon: <TiSocialFacebook />,
                title: "instergram",
                url: "https://www.instagram.com/",
            },{
                icon: <TiSocialFacebook />,
                title: "Facebook",
                url: "https://www.facebook.com/",
            },{
                icon: <TiSocialLinkedin />,
                title: "LinkedIn",
                url: "https://tz.linkedin.com/",
            },{
                icon: <TiSocialYoutube />,
                title: "youtube",
                url: "https://www.youtube.com/",
            },{
                icon: <TiSocialFacebook />,
                title: "x",
                url: "https://twitter.com/",
            }
        ]  
    },
]