export const imageAssets = {
    logo: {
        src: '/logo.png',
        width: 655,
        height: 967
    },
    homeHero: {
        src: '/home-hero-photo.jpg',
        width: 1600,
        height: 2400,
        srcSet: '/home-hero-photo-640.jpg 640w, /home-hero-photo-960.jpg 960w, /home-hero-photo.jpg 1600w',
        sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px'
    },
    meeting: {
        src: '/landing-section-meeting.jpg',
        width: 1200,
        height: 800,
        srcSet: '/landing-section-meeting-640.jpg 640w, /landing-section-meeting.jpg 1200w',
        sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px'
    },
    presentation: {
        src: '/landing-section-presentation.jpg',
        width: 1200,
        height: 800,
        srcSet: '/landing-section-presentation-640.jpg 640w, /landing-section-presentation.jpg 1200w',
        sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px'
    },
    team: {
        src: '/landing-section-team.jpg',
        width: 1200,
        height: 800,
        srcSet: '/landing-section-team-640.jpg 640w, /landing-section-team.jpg 1200w',
        sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px'
    },
    leaderAma: {
        src: '/leader-ama.jpg',
        width: 720,
        height: 1040,
        srcSet: '/leader-ama-400.jpg 400w, /leader-ama.jpg 720w',
        sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px'
    },
    leaderKwesi: {
        src: '/leader-kwesi.jpg',
        width: 720,
        height: 1080,
        srcSet: '/leader-kwesi-400.jpg 400w, /leader-kwesi.jpg 720w',
        sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px'
    },
    leaderNaa: {
        src: '/leader-naa.jpg',
        width: 720,
        height: 1080,
        srcSet: '/leader-naa-400.jpg 400w, /leader-naa.jpg 720w',
        sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px'
    }
};

export const imageAssetMap = {
    '/home-hero-photo.jpg': imageAssets.homeHero,
    '/landing-section-meeting.jpg': imageAssets.meeting,
    '/landing-section-presentation.jpg': imageAssets.presentation,
    '/landing-section-team.jpg': imageAssets.team,
    '/leader-ama.jpg': imageAssets.leaderAma,
    '/leader-kwesi.jpg': imageAssets.leaderKwesi,
    '/leader-naa.jpg': imageAssets.leaderNaa
};

export const getImageAsset = (src) => imageAssetMap[src] || {
    src,
    srcSet: undefined,
    sizes: undefined,
    width: undefined,
    height: undefined
};
