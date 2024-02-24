import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
   username: {
    type: String,
    required: true,
   } ,
   email: {
    type: String,
    required: true,
    unique: true,
   } ,
   password: {
    type: String,
    required: true,
   } ,
   avatar: {
    type: String,
    default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAACUCAMAAADxqtj8AAAANlBMVEX////a2tqysrLd3d2vr6/y8vLv7+/6+vrX19fT09PKysrj4+P19fW6urrg4OC1tbXExMSpqaml4jWTAAAEjElEQVR4nO2c0ZajIAyGR6OCIOq8/8su1HZrHSTRGvAi/17MOXPWOZ9pSEII/fkRiUQikUgkEolEIpFIJBJdIzW0bdsF+Z+DKo1zQG1n7QhQvQTjaG03lMYiSHV2xb0WgO1u/RmoDnSU/CmtoSvNuCM12CrJvrxAZW/oQqq1GmdfPgB7t1XcUuy+sn9bGnglZcnkL9nbmL87zB50j/U7jHSfWUuPN1i+SJBM4ZcPn8c9fi1blF3Zs4Z/4RdcvGr8jt1rLIY/nHb5tzQUWrtXwBfDV5fAB/wCzqNOhvkIfgHf/y5Ufip74LwSPju+L23iO6iTypp1h0vRvbIGnm9T7B/pjL7TXQ3v8bP5jrqcPShX2Py+uolpzAPfUnlgEfW/Z9nrEjexnro3QX1FfIEs1TLJ9KCNc9Mi54wm8ecwPiFagp7rT80E/hxRc0DhoZqbZkPfNDNue82fsnDT927L/uB3fXnj47HeRNAXGfRZ7nWLptl9eByfPeEiiw90zGv+ew+2doGZHjN9Ct7jY8bnhcdali4JX9cubXxm10mXOGDSpvfGN2l83mIHMR1mem/85B/gdfw2SQ+pePNS2vjAWS2k3V5H09TGdeb0x8fp+Onysp8Itp/SKZcz3abp0TX7MH46ZTHSIz3jmUSfLtcY+2pDmp7g9qFaS9Pz1ZnpkENZtIE+ma4Zg056W0WI9kFpesYNFhYwr6DnC5nfh/v70l8Sc4T+HP0V2aoc/RWVQjl6UpWGLFpGeqSNdkGFzBnvMXqC60x9MXrswGfEjY+ZnvEICJ1LgAnpKUxYO5Pz7BZrfkOPmB7zm4K7kwrtKmB+w0uPT6BBIuFS+sic+9p0gb9o27pfweNPs/YUFIEeTHTpNhPuNtyNTMpxIfSu/nP6UDt0wQbx9tJIo5dQmU9+z25ocw28fUxFOyUH3ZupbhbVUzg3JD2nmY8fiKev4P/5N5jn2fRHxgJ44Q+NKBw7bK4ynJ0QXeecuB2HYbhlBc9/YDuwwVea/7D8xKw9FT7HoAJ5ROSwcswpEIePH9EGnoGH9ESeiWo03wZcHcZb5qAw5NJXhFfINNuV9HyP6bOUc1P9yrU+2TrnsxbCn2k2KjUmAqBnF7i3VZr/hZt14gUyDIg8tZdwfXn2F/zjFXaLtXwzgXvVjo5X9p+Vsom/OfeEwlqRlAUE9ucuJTZrkXUI/0/ciW1J9swf2ajkvf2zzbg728Fd82/wc1+e2exwaccmb/7Pg8P8tx9W+KAPGP5l/pXzl7i68X/lQn8YPuC/+/hFrs08mzun4Ot3N5m1hYPhn4UP5xBQEH4plonnnHH8KtPsdFwKaAeFO/hzkQW7EjIEiOBzd0AwqZ6YYiPsdV/+erY96fiNK3u79illfk/A/5obXMx+qHOJqj5q98YVv5W9UkWtMB/stSu9XDcaIlcG9uw+l6kNkhpGCn/TmPFOX2Txlup0/ZucYP+t9a2/habzZU/8BRpfVt5pqe5osM9+ztLQ8dXko59zx2+e2ZFqbeinBekKuvbO7iISiUQikUgkEolEIpFIJMqmf4hwPcTmysJjAAAAAElFTkSuQmCC",
   },

},
    { timestamps: true }
);

const User = mongoose.model ('User', userSchema);

export default User;