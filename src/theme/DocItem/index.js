import React from 'react';
import DocItem from '@theme-original/DocItem';
import {
  JoiFrontMatter as Joi, // Custom instance for front matter
  URISchema,
  validateFrontMatter,
  FrontMatterTagsSchema,
  FrontMatterTOCHeadingLevels,
  ContentVisibilitySchema,
} from '@docusaurus/utils-validation';

const DocCustomFrontMatterAuthorSchema = Joi.object({
  key: Joi.string(),
  name: Joi.string(),
  title: Joi.string(),
  url: URISchema,
  imageURL: Joi.string(),
})
  .or('key', 'name', 'imageURL')
  .rename('image_url', 'imageURL', {alias: true});

export default function DocItemWrapper(props) {

const FrontMatterAuthorErrorMessage =
  '{{#label}} does not look like a valid blog post author. Please use an author key or an author object (with a key and/or name).';

let ftAuthors = props.content.frontMatter.authors;
if (authors){
//  let authors= Joi.alternatives()
//    .try(
//      Joi.string(),
//      DocCustomFrontMatterAuthorSchema,
//      Joi.array()
//        .items(Joi.string(), DocCustomFrontMatterAuthorSchema)
//        .messages({
//          'array.sparse': FrontMatterAuthorErrorMessage,
//          'array.includes': FrontMatterAuthorErrorMessage,
//        }),
//    )
//    .messages({
//      'alternatives.match': FrontMatterAuthorErrorMessage,
//    });
//    console.log(authors);
}
//  const { content } = props;
//
//  const { frontMatter } = metadata;
//  const { authors } = frontMatter;
//    console.log(authors)
    return (
    <>
      <DocItem {...props} />
    </>
  );
}
