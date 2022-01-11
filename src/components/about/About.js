import React from 'react';
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import BrandCardHeader from "@mui-treasury/components/cardHeader/brand";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useN03TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n03";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";
import { Box, Avatar, Chip } from "@material-ui/core";

import DoneIcon from "@material-ui/icons/Done";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1400,
    height: 640,
    borderRadius: 30,
    backgroundColor: "cream",
    
  },
  content: {
    padding: "20px",
  },
  background: {
    background: "linear-gradient(120deg, #000428, #004e92)",
    height: "920px",
  },
  chip: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const About = React.memo(function ProjectCard() {
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const cardStyles = useStyles();

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight={"92.2vh"}
      className={cardStyles.background}
    >
      <Box m={3}>
        <Card className={cx(cardStyles.root, shadowStyles.root)}>
          <BrandCardHeader
            image={
              "https://as1.ftcdn.net/v2/jpg/00/93/75/06/1000_F_93750641_DVIPwyUTj1szXFDtpOWEzYpptcCR3lE6.jpg"
            }
            extra={"Skill Mill"}
          />
          <CardContent className={cardStyles.content}>
            <TextInfoContent
              classes={styles}
              heading={"About"}
              overline={"We Are Here To Serve You!"}
              body={
                "Skill Mill is an online learning platform or portal for educational content and resources that offers a student everything they need in one place: lectures, resources, opportunities to meet and chat with other students, and more. It is also an excellent way for the student and the teacher to monitor student progress."
              }
            />
            <TextInfoContent
              classes={styles}
              body={
                "Whether you want to learn a new language or obtain career-advancing certifications, signing up for an online course could be just the perfect solution. The online class is typically provided through online learning platforms. Our exceptional staff of over 800+ valued employees who are highly motivated to work at a successful company like Skill Mill. They are trained inectively with clients globally."
              }
            />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
});

export default About;