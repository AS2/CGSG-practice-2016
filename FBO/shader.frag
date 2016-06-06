precision mediump float;

varying vec2 coord;
uniform int Size1;
uniform float Size2;
uniform sampler2D uSampler;

int mandelbrot( void )
{
  vec2 c = coord;
  vec2 z = c;
  for (int i = 0; i < 32000; i++)
  {
    if (i >= Size1)
      break;
    z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
    if ((z.x * z.x + z.y * z.y) > Size2 * Size2)
      return i;
   }
     return 0;
   }

void main( void )
{
  int color = mandelbrot();
  gl_FragColor = texture2D(uSampler, vec2(float(color) / float(Size1), float(color) / float(Size1) * 3.0));
}

