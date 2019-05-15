import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        {/* <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li> */}
                        <li><a href="https://github.com/AlphaNumericPencil" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://www.linkedin.com/in/george-rohn/" className="icon fa-linkedin"><span className="label">Dribbble</span></a></li>
                        <li><a href="mailto:ContactDesignGrove@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; George Rohn</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
