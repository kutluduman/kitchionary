import React, { useRef, useState } from 'react';
import { Redirect } from "react-router-dom";
import { Col } from 'react-simple-flex-grid';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import americanAll from '../../docs/AmericanAll.jpg';
import chineseAll from '../../docs/chineseAll.jpg'
import indian from '../../docs/indianAll.jpg';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    width: 500,
    height: 500,
    marginTop: 30,
  },
  cont: {
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  formatBox: {
    marginTop: 30,
    height: 500,
    display: "flex",
    flexDirection: "row"
  },
  formatRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    marginTop: 50
  },
  text: {
    marginLeft: theme.spacing(8),
    width: 600
  },
  paragraph: {
    fontSize: 25,
    width: 600,
  },
  link: {
    fontSize: 18,
    color: 'orange',
  },
  location: {
    width: 800,
    height: 500,
    marginLeft: 120,
  },
  location2: {
    width: 800,
    height: 500,
    marginRight: 120
  },
  left: {
    padding: 50,
    paddingTop: 30,
    paddingBottom: 30,
    fontSize: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'orange',
    marginTop: 50,
    marginBottom: 50,
    width: "60%",
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 50px 0 rgba(0, 0, 0, 0.19)',
  },
  right: {
    padding: 50,
    paddingTop: 35,
    paddingBottom: 30,
    fontSize: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'orange',
    marginTop: 40,
    marginBottom: 50,
    width: "65%",
    marginLeft: "35%",
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 50px 0 rgba(0, 0, 0, 0.19)',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
    fontSize: 25,
  },
  buttonroot: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    '& > *': {
      margin: theme.spacing(1),
      color: "#928e91",
      fontSize: "20px",
      marginLeft: 0,
    },
  },
  navButton: {
    padding: 20,
    paddingRight: 25,
    paddingBottom: 5,
  }
}));

const ColorButton = withStyles((theme) => ({
  root: {
    "&:hover": {
    },
  }
}))(Button);

function GlobeFeature(props) {
  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);
  const [cuisine, setCuisine] = useState('');

  const bull = <span className={classes.bullet}>•</span>;

  const myRefAmerican = useRef(null)
  const executeScrollAmerican = () => scrollToRef(myRefAmerican)

  const myRefChinese = useRef(null)
  const executeScrollChinese = () => scrollToRef(myRefChinese)

  const myRefGreek = useRef(null)
  const executeScrollGreek = () => scrollToRef(myRefGreek)

  const myRefIndian = useRef(null)
  const executeScrollIndian = () => scrollToRef(myRefIndian)

  const myRefItalian = useRef(null)
  const executeScrollItalian = () => scrollToRef(myRefItalian)

  const myRefJapanese = useRef(null)
  const executeScrollJapanese = () => scrollToRef(myRefJapanese)

  const myRefKorean = useRef(null);
  const executeScrollKorean = () => scrollToRef(myRefKorean)

  const myRefMediterranean = useRef(null);
  const executeScrollMediterranean = () => scrollToRef(myRefMediterranean)

  const myRefMexican = useRef(null);
  const executeScrollMexican = () => scrollToRef(myRefMexican)

  const myRefSpanish = useRef(null);
  const executeScrollSpanish = () => scrollToRef(myRefSpanish)

  const myRefTurkish = useRef(null);
  const executeScrollTurkish = () => scrollToRef(myRefTurkish)

  const handleClick = (cuisine) => {
    setCuisine(cuisine);

    axios.post(`http://localhost:8080/${cuisine}`, { cuisine })
      .then(res => {
        props.setMatchingRecipes(res.data.recipes)
        // if (res.status === 200) {
          setRedirect(true);
        // }/
      })
      .catch(err => {
      });
  }
  const handleClickRecipe = (id, recipe) => {
    setCuisine(`${id}`);

    axios.post(`http://localhost:8080/recipes/${id}`, { recipe })
      .then(res => {
        props.setRecipeData(res.data.info)
        if (res.status === 200) {
          setRedirect(true);
        }
      })
      .catch(err => {
      });
  }

  if (!redirect) {
    return (
      <div>
        <div className={classes.buttonroot} >
          <Button className={classes.navButton} onClick={executeScrollAmerican}>American</Button>
          <Button className={classes.navButton} onClick={executeScrollChinese}>Chinese</Button>
          <Button className={classes.navButton} onClick={executeScrollGreek}>Greek</Button>
          <Button className={classes.navButton} onClick={executeScrollIndian}>Indian</Button>
          <Button className={classes.navButton} onClick={executeScrollItalian}>Italian</Button>
          <Button className={classes.navButton} onClick={executeScrollJapanese}>Japanese</Button>
          <Button className={classes.navButton} onClick={executeScrollKorean}>Korean</Button>
          <Button className={classes.navButton} onClick={executeScrollMediterranean}>Mediterranean</Button>
          <Button className={classes.navButton} onClick={executeScrollMexican}>Mexican</Button>
          <Button className={classes.navButton} onClick={executeScrollSpanish}>Spanish</Button>
          <ColorButton className={classes.navButton} onClick={executeScrollTurkish}>Turkish</ColorButton>
        <div ref={myRefAmerican}></div>
        </div>
        <h2 className={classes.left} >American</h2>
        <div className={classes.formatRow}>
          <Col>
            <Box className={classes.formatBox}>
              <div className={classes.text}>
                <Typography variant="h5" component="h2" className={classes.title}>
                  a{bull}mer{bull}i{bull}can
              </Typography>
                <p className={classes.paragraph}>American cuisine reflects the history of the United States, blending the culinary contributions of various groups of people from around the world, including indigenous American Indians, African Americans, Asians, Europeans, Pacific Islanders, and Latin Americans.</p>
                <Button onClick={() => handleClick('american')} className={classes.link} >
                  Find more Recipes here!
            </Button>
              </div>
            </Box>
          </Col>
          <Col>
            <CardMedia
              className={classes.location}
              image={americanAll}
              title="PLATTER"
            />
          </Col>
        </div>
        
        <div className={classes.formatRow}>
          <Col>
            <CardMedia
              className={classes.location2}
              image="https://www.seasonsandsuppers.ca/wp-content/uploads/2013/01/mac-cheese-3.jpg"
              title="SAMPLE RECIPE IMAGE"
            />
          </Col>
          <Col>
            <Box className={classes.formatBox}>
              <div className={classes.text}>
                <h1 className={classes.title}>Mac & Cheese</h1>
                <p className={classes.paragraph}>This mac and cheese is a family favorite recipe, loved by both children and adults. It uses a combination of cheeses, layered in the dish as well as melted into a rich and creamy cheese sauce, for the ultimate in cheesy deliciousness!  Perfect for a comforting dinner or as a holiday side dish!</p>
                <Button onClick={() => handleClickRecipe(12, 'Mac & Cheese')} className={classes.link}>
                  Try making it here!
            </Button>
              </div>
            </Box>
          </Col>
        </div>
        <div ref={myRefChinese}></div>
        <br/>
        <br/>
        <br/>
        <h2 className={classes.right} >Chinese</h2>
        <div className={classes.formatRow}>
          <Col>
            <Box className={classes.formatBox}>
              <div classN
                ame={classes.text}>
                <Typography variant="h5" component="h2" className={classes.title}>
                  chi{bull}nese
              </Typography>
                <p className={classes.paragraph}>Chinese cuisine is an important part of Chinese culture, which includes cuisine originating from the diverse regions of China, as well as from Overseas Chinese who have settled in other parts of the world.</p>
                <Button className={classes.link} onClick={() => handleClick('chinese')} >
                  Find more Recipes here!
            </Button>
              </div>
            </Box>
          </Col>
          <Col>
            <CardMedia
              className={classes.location}
              image={chineseAll}
              title="SAMPLE 1"
            />
          </Col>
        </div>
        <div className={classes.formatRow}>
          <Col>
            <CardMedia
              className={classes.location2}
              image="https://omnivorescookbook.com/wp-content/uploads/2018/04/1804_Egg-Fried-Rice_003.jpg"
              title="SAMPLE 1"
            />
          </Col>
          <Col>
            <Box className={classes.formatBox}>
              <div classN
                ame={classes.text}>
                <h1 className={classes.title}>Egg Fried Rice</h1>
                <p className={classes.paragraph}>The easiest egg fried rice that you can prep and cook in 10 minutes, and it tastes better than the restaurant version.</p>
                <Button onClick={() => handleClickRecipe(4, 'Egg Fried Rice')} className={classes.link} >
                  Try making it here!
            </Button>
              </div>
            </Box>
          </Col>
        </div>
        <div ref={myRefGreek}></div>
        <br/>
        <br/>
        <br/>
        <h2 className={classes.left} >Greek</h2>
        <div className={classes.formatRow}>
          <Col>
            <Box className={classes.formatBox}>
              <div classN
                ame={classes.text}>
                <Typography variant="h5" component="h2" className={classes.title}>
                  gr{bull}eek
              </Typography>
                <p className={classes.paragraph}>Greek cuisine is the cuisine of Greece and the Greek diaspora. It is founded on the triad of wheat, olive oil, and wine. It uses vegetables, olive oil, grains, fish, and meat, including pork, poultry, veal and beef, lamb, rabbit, and goat.</p>
                <Button className={classes.link} onClick={() => handleClick('greek')} >
                  Find more Recipes here!
            </Button>
              </div>
            </Box>
          </Col>
          <Col>
            <CardMedia
              className={classes.location}
              image="https://about.spud.com/wrdp/wp-content/uploads/2017/06/shutterstock_646209787.jpg"
              title="SAMPLE 1"
            />
          </Col>
        </div>
        <div className={classes.formatRow}>
          <Col>
            <CardMedia
              className={classes.location2}
              image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-491503_12-f496108.jpg?quality=90&webp=true&resize=440,400"
              title="SAMPLE 1"
            />
          </Col>
          <Col>
            <Box className={classes.formatBox}>
              <div classN
                ame={classes.text}>
                <h1 className={classes.title}>Crispy Greek-style pie</h1>
                <p className={classes.paragraph}>A crispy pie that you can adapt for your needs, add chicken or keep it veggie. A good fail-safe for your repertoire</p>
                <Button onClick={() => handleClickRecipe(13, 'Crispy Greek-style pie')} className={classes.link} >
                  Try making it here!
            </Button>
              </div>
            </Box>
          </Col>
        </div>     
        <div ref={myRefIndian}></div>
        <br/>
        <br/>
        <br/>
        <h2 className={classes.right} >Indian</h2>
        <div className={classes.formatRow}>
          <Col>
            <Box className={classes.formatBox}>
              <div className={classes.text}>
                <Typography variant="h5" component="h2" className={classes.title}>
                  in{bull}di{bull}an
              </Typography>
                <p className={classes.paragraph}>Indian cuisine consists of a variety of regional and traditional cuisines native to the Indian subcontinent. Given the diversity in soil, climate, culture, ethnic groups, and occupations, these cuisines vary substantially and use locally available spices, herbs, vegetables, and fruits.</p>
                <Button className={classes.link} onClick={() => handleClick('indian')} >
                  Find more Recipes here!
            </Button>
              </div>
            </Box>
          </Col>
          <Col>
            <CardMedia
              className={classes.location}
              image="https://lh3.googleusercontent.com/proxy/05cafU4UM7b0V6i4UK_Ot7ss_zA05gY47X8r1telhJKycQ5i6vgnwdWUs3gboWVWo7TonzxgMhP6kTEqaUkPgahjoIiwwGjYeCK10OOmcEooUMNM"
              title="SAMPLE 1"
            />
          </Col>
        </div>
        <div className={classes.formatRow}>
          <Col>
            <CardMedia
              className={classes.location2}
              image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8103869.jpg&q=85"
              title="SAMPLE 1"
            />
          </Col>
          <Col>
            <Box className={classes.formatBox}>
              <div classN
                ame={classes.text}>
                <h1 className={classes.title}>Naan</h1>
                <p className={classes.paragraph}>While this recipe is not a true naan bread, this sure works in a pinch!</p>
                <Button onClick={() => handleClickRecipe(3, 'Naan')} className={classes.link}>
                  Try making it here!
            </Button>
              </div>
            </Box>
          </Col>
        </div>
        <div ref={myRefItalian}></div>
        <br/>
        <br/>
        <br/>
        <h2 className={classes.left} >Italian</h2>
        <div className={classes.formatRow}>
          <Col>
            <Box className={classes.formatBox}>
              <div className={classes.text}>
                <Typography variant="h5" component="h2" className={classes.title}>
                  i{bull}tal{bull}ian
              </Typography>
                <p className={classes.paragraph}>Italian cuisine consists of the ingredients, recipes and cooking techniques developed across the Italian Peninsula since the antiquity, and later spread around the world together with waves of Italian diaspora.</p>
                <Button className={classes.link} onClick={() => handleClick('italian')}>
                  Find more Recipes here!
            </Button>
              </div>
            </Box>
          </Col>
          <Col>
            <CardMedia
              className={classes.location}
              image="https://www.horshamconservatives.com/sites/www.horshamconservatives.com/files/2020-01/Itaian%20Food.jpg"
              title="SAMPLE 1"
            />
          </Col>
        </div>
        <div className={classes.formatRow}>
          <Col>
            <CardMedia
              className={classes.location2}
              image="https://www.twopeasandtheirpod.com/wp-content/uploads/2020/03/5-Ingredient-Spinach-Parmesan-Pasta-5.jpg"
              title="dfd"
            />
          </Col>
          <Col>
            <Box className={classes.formatBox}>
              <div className={classes.text}>
                <h1 className={classes.title}>Spinach Parmesan Pasta</h1>
                <p className={classes.paragraph}>5-Ingredient Spinach Parmesan Pasta-you only need 5 ingredients to make this quick and easy pasta dish! Add it to your dinner menu today!</p>
                <Button onClick={() => handleClickRecipe(16, 'Spinach Parmesan Pasta')} className={classes.link}>
                  Try making it here!
            </Button>
              </div>
            </Box>
          </Col>
        </div>
        <div ref={myRefJapanese}></div>
        <br/>
        <br/>
        <br/>
        <h2 className={classes.right} >Japanese</h2>
        <div className={classes.formatRow}>
          <Col>
            <Box className={classes.formatBox}>
              <div className={classes.text}>
                <Typography variant="h5" component="h2" className={classes.title}>
                  jap{bull}a{bull}nese
              </Typography>
                <p className={classes.paragraph}>Japanese cuisine encompasses the regional and traditional foods of Japan, which have developed through centuries of political, economic, and social changes. The traditional cuisine of Japan, washoku, lit. "Japanese eating", is based on rice with miso soup and other dishes; there is an emphasis on seasonal ingredients.</p>
                <Button className={classes.link} onClick={() => handleClick('japanese')}>
                  Find more Recipes here!
            </Button>
              </div>
            </Box>
          </Col>
          <Col>
            <CardMedia
              className={classes.location}
              image="https://media.istockphoto.com/photos/japanese-dining-healthy-food-picture-id847043282?k=6&m=847043282&s=612x612&w=0&h=i2SfIVQiuE9QkGleY3KRast9v8mEubeWpA7dCYS11Fo="
              title="SAMPLE 1"
            />
          </Col>
        </div>
        <div className={classes.formatRow}>
          <Col>
            <CardMedia
              className={classes.location2}
              image="https://hips.hearstapps.com/delish/assets/17/26/1498598755-teriyaki-chicken.jpg"
              title="SAMPLE 1"
            />
          </Col>
          <Col>
            <Box className={classes.formatBox}>
              <div className={classes.text}>
                <h1 className={classes.title}>Teriyaki Chicken</h1>
                <p className={classes.paragraph}>Everyone loves this quick and easy marinade! I always make extra chicken for leftovers – it is great chopped up on top of a salad or in a sandwich wrap. YUM! We make this almost every other week – so good!'</p>
                <Button onClick={() => handleClickRecipe(11, 'Teriyaki Chicken')} className={classes.link}>
                  Try making it here!
            </Button>
              </div>
            </Box>
          </Col>
        </div>
        <div ref={myRefKorean}></div>
        <br/>
        <br/>
        <br/>
        <h2 className={classes.left} >Korean</h2>
        <div className={classes.formatRow}>
          <Col>
            <Box className={classes.formatBox}>
              <div className={classes.text}>
                <Typography variant="h5" component="h2" className={classes.title}>
                  ko{bull}re{bull}an
                </Typography>
                <p className={classes.paragraph}>Korean cuisine is the customary cooking traditions and practices of the culinary arts of Korea. Korean cuisine has evolved through centuries of social and political change.</p>
                <Button className={classes.link} onClick={() => handleClick('korean')}>
                  Find more Recipes here!
            </Button>
              </div>
            </Box>
          </Col>
          <Col>
            <CardMedia
              className={classes.location}
              image="https://asiasociety.org/sites/default/files/styles/1200w/public/2019-02/%EB%B0%98%EC%B0%AC.jpg"
              title="SAMPLE 1"
            />
          </Col>
        </div>
        <div className={classes.formatRow}>
          <Col>
            <CardMedia
              className={classes.location2}
              image="https://i1.wp.com/photos.smugmug.com/Corn-Cheese/i-4CB3Pch/0/276338e8/L/Corn%20Cheese%202-L.jpg?w=1170&ssl=1"
              title="SAMPLE 1"
            />
          </Col>
          <Col>
            <Box className={classes.formatBox}>
              <div classN
                ame={classes.text}>
                <h1 className={classes.title}>Cheese Corn</h1>
                <p className={classes.paragraph}>Cheese corn what Koreans call cheesy corn. It often served in Korean BBQ restraints.</p>
                <Button onClick={() => handleClickRecipe(7, 'Cheese Corn')} className={classes.link}>
                  Try making it here!
            </Button>
              </div>
            </Box>
          </Col>
        </div>
        <div ref={myRefMediterranean}></div>
        <br/>
        <br/>
        <br/>
        <h2 className={classes.right} >Mediterranean</h2>
        <div className={classes.formatRow}>
          <Col>
            <Box className={classes.formatBox}>
              <div className={classes.text}>
                <Typography variant="h5" component="h2" className={classes.title}>
                  med{bull}i{bull}ter{bull}ra{bull}ne{bull}an
                </Typography>
                <p className={classes.paragraph}>Mediterranean cuisine is the foods and methods of preparation by people of the Mediterranean Basin. The idea of a Mediterranean cuisine originates with the cookery writer Elizabeth David's book, A Book of Mediterranean Food (1950) and was amplified by other writers working in English. Many writers define the three core elements of the cuisine as the olive, wheat, and the grape, yielding olive oil, bread and pasta, and wine; other writers emphasize the diversity of the region's foods and deny that it is a useful concept. A common definition of the geographical area covered follows the distribution of the olive tree.</p>
                <Button onClick={() => handleClick('mediterranean')} className={classes.link}>
                  Find more Recipes here!
            </Button>
              </div>
            </Box>
          </Col>
          <Col>
            <CardMedia
              className={classes.location}
              image="https://curlytales.com/wp-content/uploads/2019/10/QSR-Magazine.jpg"
              title="SAMPLE 1"
            />
          </Col>
        </div>
        <div className={classes.formatRow}>
          <Col>
            <CardMedia
              className={classes.location2}
              image="https://assets.epicurious.com/photos/568d2913a6484b0c2258dd1f/6:4/w_620%2Ch_413/EP_01052016_3ingredientshaksuka.jpg"
              title="SAMPLE 1"
            />
          </Col>
          <Col>
            <Box className={classes.formatBox}>
              <div classN
                ame={classes.text}>
                <h1 className={classes.title}>Shakshuka</h1>
                <p className={classes.paragraph}>This delicious breakfast dish comes together fast, thanks to prepared salsa.</p>
                <Button onClick={() => handleClickRecipe(9, 'Shakshuka')} className={classes.link}>
                  Try making it here!
            </Button>
              </div>
            </Box>
          </Col>
        </div>
        <div ref={myRefMexican}></div>
        <br/>
        <br/>
        <br/>
        <h2 className={classes.left} >Mexican</h2>
        <div className={classes.formatRow}>
          <Col>
            <Box className={classes.formatBox}>
              <div className={classes.text}>
                <Typography variant="h5" component="h2" className={classes.title}>
                  mex{bull}i{bull}can
                </Typography>
                <p className={classes.paragraph}>Mexican cuisine began about nine thousand years ago, when agricultural communities such as the Maya formed, domesticating maize, creating the standard process of maize nixtamalization, and establishing their foodways (Maya cuisine). The staples are native foods, such as corn (maize), beans, squash, amaranth, chia, avocados, tomatoes, tomatillos, cacao, vanilla, agave, turkey, spirulina, sweet potato, cactus, and chili pepper.</p>
                <Button onClick={() => handleClick('mexican')} className={classes.link}>
                  Find more Recipes here!
            </Button>
              </div>
            </Box>
          </Col>
          <Col>
            <CardMedia
              className={classes.location}
              image="https://img1.mashed.com/img/gallery/mexican-foods-you-need-to-try-before-you-die/intro-1585677665.jpg"
              title="SAMPLE 1"
            />
          </Col>
        </div>
        <div className={classes.formatRow}>
          <Col>
            <CardMedia
              className={classes.location2}
              image='https://www.simplyrecipes.com/wp-content/uploads/2018/07/Guacamole-LEAD-6.jpg'
              title="SAMPLE 1"
            />
          </Col>
          <Col>
            <Box className={classes.formatBox}>
              <div classN
                ame={classes.text}>
                <h1 className={classes.title}>Perfect Guacamole</h1>
                <p className={classes.paragraph}>This is my favorite guacamole recipe! See how to make the very best guacamole at home. Our recipe is simple, fresh, and no matter what else we serve with it, it’s always the first to go.</p>
                <Button onClick={() => handleClickRecipe(1, 'Perfect Guacamole')} className={classes.link}>
                  Try making it here!
            </Button>
              </div>
            </Box>
          </Col>
        </div>
        <div ref={myRefSpanish}></div>
        <br/>
        <br/>
        <br/>
        <h2 className={classes.right} >Spanish</h2>
        <div className={classes.formatRow}>
          <Col>
            <Box className={classes.formatBox}>
              <div className={classes.text}>
                <Typography variant="h5" component="h2" className={classes.title}>
                  span{bull}ish
                </Typography>
                <p className={classes.paragraph}>Spanish cuisine is heavily influenced by historical processes that shaped local culture and society in some of Europe's Iberian Peninsula territories. Geography and climate have had a great influence on cooking methods and available ingredients. These cooking methods and ingredients are still present in the gastronomy of the various regions that make up Spain. Spanish cuisine derives from a complex history where invasions and conquests of Spain have modified traditions, which made new ingredients available. Thus, the current and old cuisine of Spain incorporates old and new traditions.</p>
                <Button onClick={() => handleClick('spanish')} className={classes.link}>
                  Find more Recipes here!
            </Button>
              </div>
            </Box>
          </Col>
          <Col>
            <CardMedia
              className={classes.location}
              image="https://res.cloudinary.com/wegowordpress/image/upload/f_auto,q_auto/v1571386678/shutterstock_1060937360_pzbrjz.jpg"
              title="SAMPLE 1"
            />
          </Col>
        </div>
        <div className={classes.formatRow}>
          <Col>
            <CardMedia
              className={classes.location2}
              image="https://assets.epicurious.com/photos/57f56169ac42db5f6777d85f/6:4/w_620%2Ch_413/3-Ingredient-Tomato-Soup.jpg"
              title="SAMPLE 1"
            />
          </Col>
          <Col>
            <Box className={classes.formatBox}>
              <div classN
                ame={classes.text}>
                <h1 className={classes.title}>Tomato Soup</h1>
                <p className={classes.paragraph}>Roasting the tomatoes intensifies their flavor in this simple yet delicious soup.</p>
                <Button onClick={() => handleClickRecipe(10, 'Tomato Soup')} className={classes.link}>
                  Try making it here!
            </Button>
              </div>
            </Box>
          </Col>
        </div>
        <div ref={myRefTurkish}></div>
        <br/>
        <br/>
        <br/>
        <h2 className={classes.left} >Turkish</h2>
        <div className={classes.formatRow}>
          <Col>
            <Box className={classes.formatBox}>
              <div classN
                ame={classes.text}>
                <Typography variant="h5" component="h2" className={classes.title}>
                  tur{bull}kish
                </Typography>
                <p className={classes.paragraph}>Turkish cuisine is largely the heritage of Ottoman cuisine, which can be described as a fusion and refinement of Central Asian, Middle Eastern, Mediterranean, Eastern European and Balkan cuisines.</p>
                <Button onClick={() => handleClick('turkish')} className={classes.link}>
                  Find more Recipes here!
            </Button>
              </div>
            </Box>
          </Col>
          <Col>
            <CardMedia
              className={classes.location}
              image={indian}
              title="SAMPLE 1"
            />
          </Col>
        </div>
        <div className={classes.formatRow}>
          <Col>
            <CardMedia
              className={classes.location2}
              image="https://zestysouthindiankitchen.com/wp-content/uploads/2018/06/Turkish-Ramadan-pidesi-3.jpg"
              title="SAMPLE 1"
            />
          </Col>
          <Col>
            <Box className={classes.formatBox}>
              <div classN
                ame={classes.text}>
                <h1 className={classes.title}>Homemade Turkish Flatbread</h1>
                <p className={classes.paragraph}>Delicious, easy and cheap to make Turkish flatbread recipe. You can have this bread for breakfast, as a starter, snack or as a side dish to about everything.</p>
                <Button onClick={() => handleClickRecipe(17, 'Homemade Turkish Flatbread')} className={classes.link}>
                  Try making it here!
            </Button>
              </div>
            </Box>
          </Col>
        </div>
      </div>
    )
  } else {
    if (cuisine === 'american') {
      return <Redirect to={{ pathname: "/american" }} />;
    } else if (cuisine === 'chinese') {
      return <Redirect to={{ pathname: "/chinese" }} />;
    } else if (cuisine === 'indian') {
      return <Redirect to={{ pathname: "/indian" }} />;
    } else if (cuisine === 'japanese') {
      return <Redirect to={{ pathname: "/japanese" }} />;
    } else if (cuisine === 'korean') {
      return <Redirect to={{ pathname: "/korean" }} />;
    } else if (cuisine === 'italian') {
      return <Redirect to={{ pathname: "/italian" }} />;
    } else if (cuisine === 'turkish') {
      return <Redirect to={{ pathname: "/turkish" }} />;
    } else if (cuisine === 'spanish') {
      return <Redirect to={{ pathname: "/spanish" }} />;
    } else if (cuisine === 'mexican') {
      return <Redirect to={{ pathname: "/mexican" }} />;
    } else if (cuisine === 'mediterranean') {
      return <Redirect to={{ pathname: "/mediterranean" }} />;
    } else if (cuisine === 'greek') {
      return <Redirect to={{ pathname: "/greek" }} />;
    } else if (cuisine === '12') {
      return <Redirect to={{ pathname: "/recipes/12" }} />;
    } else if (cuisine === '4') {
      return <Redirect to={{ pathname: "/recipes/4" }} />;
    } else if (cuisine === '13') {
      return <Redirect to={{ pathname: "/recipes/13" }} />;
    } else if (cuisine === '3') {
      return <Redirect to={{ pathname: "/recipes/3" }} />;
    } else if (cuisine === '16') {
      return <Redirect to={{ pathname: "/recipes/16" }} />;
    } else if (cuisine === '11') {
      return <Redirect to={{ pathname: "/recipes/11" }} />;
    } else if (cuisine === '7') {
      return <Redirect to={{ pathname: "/recipes/7" }} />;
    } else if (cuisine === '9') {
      return <Redirect to={{ pathname: "/recipes/9" }} />;
    } else if (cuisine === '1') {
      return <Redirect to={{ pathname: "/recipes/1" }} />;
    } else if (cuisine === '10') {
      return <Redirect to={{ pathname: "/recipes/10" }} />;
    } else if (cuisine === '17') {
      return <Redirect to={{ pathname: "/recipes/17" }} />;
    }
  }
}

export default GlobeFeature;