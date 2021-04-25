import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <>
            {/* The header for the whole website(nav included) */}
        </>
    )
}

Header.defaultProps = {
    title: 'Covid Support',
}

Header.propTypes = {
    title: PropTypes.string,
}

// CSS in reactJS
// const headingStyle = {
//     color: 'red',
//     backgorundColor: 'black',
// }

export default Header