import SBData from './includes/SBData.js';

export default async (server, options) => {
    server.register(SBData, {prefix: '/sbdata'})
}