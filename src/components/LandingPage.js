import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'

const LandingPage = (props) => {
    return (
        <>
            <Header />
            {/* Assemble all your components here */}
            <Footer />
        </>
    )
}

LandingPage.defaultProps = {
    title: 'Covid Support',
}

LandingPage.propTypes = {
    title: PropTypes.string,
}

// CSS in reactJS
// const headingStyle = {
//     color: 'red',
//     backgorundColor: 'black',
// }

export default LandingPage