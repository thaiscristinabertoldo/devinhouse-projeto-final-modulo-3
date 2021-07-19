import { BaseLayout } from '../../layouts/BaseLayout';
import { Box, Button, Container, Divider, Grid, Paper, Typography } from '@material-ui/core';
import { TextInput } from '../../components/TextInput';
import { Pre } from '../../components/Pre/Pre';

export const LoginPage = ({ history }) => {
  const onClickLogin = () => {
    history.push('/processos');
  };

  return (
    <BaseLayout>
      <Box minHeight="100%" width="100%" display="flex" justifyContent="center" alignItems="center">
        <Container component={Paper} elevation={3} maxWidth="sm">
          <Box padding={2}>
            <Typography variant="h4" gutterBottom align="center">
              Login
            </Typography>
            <Divider variant="fullWidth" />
            <Box marginY={2}>
              <Typography variant="body1">
                Seja bem vindo!
                <br /> Para acessar, utilize as credenciais usuário <Pre>admin</Pre> e senha <Pre>adminpass</Pre>{' '}
              </Typography>
            </Box>
            <Box marginY={2}>
              <TextInput label="Usuário" placeholder="Digite seu usuário" />
              <TextInput label="Senha" placeholder="Digite sua senha" type="password" />
            </Box>
            <Grid container justifyContent="flex-end">
              <Button
                onClick={onClickLogin}
                size="large"
                variant="contained"
                color="primary"
                style={{ color: 'white' }}
              >
                <strong>Entrar</strong>
              </Button>
            </Grid>
          </Box>
        </Container>
      </Box>
    </BaseLayout>
  );
};
