module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '126c91edefd365d079ad402df60f5718'),
  },
});
