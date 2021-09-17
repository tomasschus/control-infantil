import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import MainIcon from '@material-ui/icons/ChildCare';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';

import fakeData from "../data"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/tomasschus/control-infantil">
        DigiControl.com
      </Link>
      {' '}{new Date().getFullYear()}{'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
    fontSize: '35px'
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    }
  },
  carousel: {
    width: '100%',
    height: '100%',
    margin: 'auto',
  },
  root: {
    flexGrow: 1,
  }
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h4" noWrap>
            <Link color="inherit" style={{ textDecoration: 'none' }} href="#">
              <MainIcon className={classes.icon} />
              DigiControl.com
            </Link>
          </Typography>
          <Link color="inherit" style={{ textDecoration: 'none' }} href="/signin">
            <Button color="inherit" variant="outlined">Iniciar sesión</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <main>

        {/* Main image */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Quienes somos:
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              DIGICONTROL es una plataforma en la que podras hacer seguimiento del calendario médico de tus hijos, percentiles, y herramientas diseñadas para que concentres tu informacion más importante.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Link color="inherit" style={{ textDecoration: 'none' }} href="/#servicios">
                    <Button variant="contained" color="primary">
                      Quiero saber más
                    </Button>
                  </Link>

                </Grid>
                <Grid item>
                  <Link color="inherit" style={{ textDecoration: 'none' }} href="/signup">
                    <Button variant="outlined" color="primary">
                      Registrarse gratis
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        {/* News container */}
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {fakeData.news.map((card) => (
              <Grid item key={`item-${card.id}`} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia} image={'.' + card.img} title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography className={classes.title} color="textSecondary" variant="body2" component="p" gutterBottom>
                      {card.date}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      {card.button}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Carrousel container */}
        <Container className={classes.root} maxWidth="md">
          <Carousel>
            {fakeData.images.map((card) => (
              <CarouselItem>
                <img className={`d-block w-90 ${classes.carousel}`} src={'.' + card.img} alt="First slide"
                />
              </CarouselItem>
            ))}
          </Carousel>
        </Container>

        {/* Info container */}
        <Container className={classes.cardGrid} maxWidth="md">
          <hr />
          <Typography id="servicios" gutterBottom variant="h5" component="h2">
            Novedades:  <br />
          </Typography>
          <Grid container spacing={4}>
            {fakeData.info.map((card) => (
              <Grid item key={card.id} xs={20} sm={6} md={4}>
                <Card className={classes.root} variant="outlined">
                  <CardMedia
                    className={classes.cardMedia} image={card.img} title="Image title"
                  />
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <br />
                    <Typography variant="body2" component="p">
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="outlined" color="primary" size="small">{card.button}</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>

        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">

        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}