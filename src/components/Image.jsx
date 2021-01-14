import React from "react";
import StyleSheet from "react";

// function Image() {
//   return <image style={styles.image} src={logo} alt="Logo" />;
// }

const Image = styled.Image`
  position: absolute;
  left: 8.49%;
  right: 6.6%;
  top: 6.73%;
  bottom: 6.73%;
  background: url(image.png), url(image.png);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
const imageUrl = this.props.imageUrl

render(
    <div>
      <Image
        href={imageUrl}
        // target="_blank"
        // rel="noopener"
        // primary
      >
        {/* GitHub */}
      </Image>
      {/* <Button as={Link} href="/docs">
        Documentation
      </Button> */}
    </div>
  )

export default Image;
