const Validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validateProfileInput(data) {
  let errors = {};
  console.log("----", data);
  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle needs to between 2 and 4 characters";
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Profile handle is required";
  }
  if (Validator.isEmpty(data.status)) {
    errors.status = "status field is invalid";
  }
  if (Validator.isEmpty(data.skills)) {
    errors.skills = "skills field is invalid";
  }
  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "website field is invalid";
    }
  }
  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "youtube field is invalid";
    }
  }
  if (!isEmpty(data.tweeter)) {
    if (!Validator.isURL(data.tweeter)) {
      errors.tweeter = "tweeter field is invalid";
    }
  }
  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(datafacebooke)) {
      errors.facebook = "facebook field is invalid";
    }
  }
  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "instagram field is invalid";
    }
  }
  if (!isEmpty(data.linked)) {
    if (!Validator.isURL(data.linked)) {
      errors.linked = "linked field is invalid";
    }
  }

  console.log(errors);
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
