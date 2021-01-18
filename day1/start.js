(() => {
  const setup = () => {
    const canvas = document.getElementById("falling-snow-canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    return {
      canvas,
      canvasContext: canvas.getContext("2d"),
      number_of_snow_ball: 250,
    };
  };
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const createSnowBall = (canvas, number_of_snow_ball) => {
    return [...Array(number_of_snow_ball)].map(() => {
      return {
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        opacity: random(0.5, 1),
        radius: random(2, 4),
        speed_x: random(-5, 5),
        speed_y: random(1, 3),
      };
    });
  };
  const drawSnowBall = (canvasContext, snow_ball) => {
    canvasContext.beginPath();
    //draw circle
    canvasContext.arc(
      snow_ball.x,
      snow_ball.y,
      snow_ball.radius,
      0,
      Math.PI * 2
    );
    canvasContext.fillStyle = `rgba(255,255,255,${snow_ball.opacity})`;
    canvasContext.fill();
  };
  const moveSnowBall = (canvas, snow_ball) => {
    snow_ball.x += snow_ball.speed_x;
    snow_ball.y += snow_ball.speed_y;

    if (snow_ball.x > canvas.width) {
      snow_ball.x = 0;
    } else if (snow_ball.x < 0) {
      snow_ball.x = canvas.width;
    }

    if (snow_ball.y > canvas.height) {
      snow_ball.y = 0;
    } else if (snow_ball.y < 0) {
      snow_ball.y = canvas.height;
    }
  };
  const run = () => {
    const { canvas, canvasContext, number_of_snow_ball } = setup();
    const snow_ball = createSnowBall(canvas, number_of_snow_ball);

    //set time
    setInterval(() => {
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      snow_ball.forEach((snow_ball) => {
        drawSnowBall(canvasContext, snow_ball);
      });
      snow_ball.forEach((snow_ball) => {
        moveSnowBall(canvas, snow_ball);
      });
    }, 25);
  };
  run();
})();
