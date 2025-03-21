import styled from "styled-components";

export interface CardProps {
  revealed?: boolean;
}

export default function Card({ revealed = false }: CardProps) {
  const cardStyle = {
    transition: revealed
      ? "var(--hover-in-transition)"
      : "var(--hover-out-transition)",
  } as React.CSSProperties;

  const frontCardStyle = {
    ...cardStyle,
    "--rotate": revealed ? "rotateY(0turn)" : "rotateY(0.5turn)",
  } as React.CSSProperties;

  const backCardStyle = {
    ...cardStyle,
    "--rotate": revealed ? "rotateY(0.5turn)" : "rotateY(1turn)",
  } as React.CSSProperties;

  return (
    <Container>
      <CardBack style={backCardStyle} />
      <CardFront style={frontCardStyle}>
        <ImageWrapper>
          <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />
        </ImageWrapper>
        <CardInfo>
          <Title>Some title</Title>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
            et ipsam neque laudantium modi rem!
          </Description>
        </CardInfo>
      </CardFront>
    </Container>
  );
}

const Container = styled.article`
  --hover-in-transition: transform 350ms ease-out, box-shadow 350ms ease-out;
  --hover-out-transition: transform 700ms ease-out, box-shadow 700ms ease-out;

  cursor: pointer;
  position: relative;
  will-change: transform;
  transform-style: preserve-3d;
`;

const CardFront = styled.div`
  --rotate: rotateY(0turn);

  position: absolute;
  inset: 18px;
  background-color: var(--THEME_COLOR_03);
  border: 4px solid transparent;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 4px;
  transform: var(--rotate);
  backface-visibility: hidden;
  box-shadow: var(--SHADOW_ELEVATION_MEDIUM);
  transition: var(--hover-in-transition);

  ${Container}:hover & {
    transform: var(--rotate) translateY(3px) scale(1.05);
    box-shadow: var(--SHADOW_ELEVATION_HIGH);
  }

  &::before {
    content: "";
    position: absolute;
    color: white;
    display: grid;
    place-content: center;
    inset: 4px;
    background-color: var(--THEME_COLOR_03);
    border-radius: 6px;
    z-index: -1;
  }
`;

const CardBack = styled.div`
  --rotate: rotateY(0.5turn);

  position: absolute;
  inset: 18px;
  border-radius: 8px;
  transform: rotateY(0.5turn);
  transform: var(--rotate);
  backface-visibility: hidden;
  box-shadow: var(--SHADOW_ELEVATION_MEDIUM);
  background-color: var(--THEME_COLOR_03);
  transition: var(--hover-in-transition);

  ${Container}:hover & {
    transform: var(--rotate) translateY(3px) scale(1.05);
    box-shadow: var(--SHADOW_ELEVATION_HIGH);
  }

  &::before {
    content: "?";
    position: absolute;
    color: white;
    font-size: 12rem;
    display: grid;
    place-content: center;
    inset: 8px;
    background-color: var(--THEME_COLOR_04);
    border-radius: 6px;
  }
`;

const ImageWrapper = styled.section`
  flex: 2 1 0px;
  border: 4px solid transparent;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  background-color: var(--THEME_COLOR_02);
`;

const CardInfo = styled.section`
  flex: 1;
  padding: 8px;
  color: var(--THEME_COLOR_01);
  text-shadow:
    1px 0px var(--THEME_COLOR_03),
    -1px 0px var(--THEME_COLOR_03),
    0px 1px var(--THEME_COLOR_03),
    0px -1px var(--THEME_COLOR_03);
`;

const Title = styled.h3`
  text-align: center;
`;

const Description = styled.p`
  line-height: 1;
  text-align: justify;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
