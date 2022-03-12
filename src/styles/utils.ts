const utils = {
  px: (value: any) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: any) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  mx: (value: any) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: any) => ({
    marginTop: value,
    marginBottom: value,
  }),
};

export default utils;
