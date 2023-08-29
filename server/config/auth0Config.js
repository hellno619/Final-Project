import {auth} from 'express-oauth2-jwt-bearer'
const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "https://dev-2bcux5dm7c2nbx62.us.auth0.com",
    tokenSigningAlg: "RS256"

})

export default jwtCheck