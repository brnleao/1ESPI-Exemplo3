import {Link} from 'react-router-dom'

const Nav=()=>{
    return(
        <>
            <h1>Nav</h1>
            <Link to='/'>Home</Link>
            <Link to='/Aluno'>Aluno</Link>
        </>
    )
}

export default Nav