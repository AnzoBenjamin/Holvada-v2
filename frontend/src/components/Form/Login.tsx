import Button from '../../UI/Button'
import Input from '../../UI/Input'
import classes from './Login.module.scss'

const Login = () => {
    const loginHandler = () => {
      console.log('login');
    }

  return (
    <form className={classes['form-login']}>
        <h2>Login</h2>
        <Input type="email" placeholder='Email'/>
        <Input type="password" placeholder='Password'/>
        <Button text='Login' onClick={loginHandler}/>
    </form>
  )
}

export default Login