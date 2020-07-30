export default class Post {
  constructor(
    post_id,
    name,
    image,
    uri,
    caption,
    likes,
    comment_list,
    time,
    no_of_comment
  ) {
    this.post_id = post_id;
    this.name = name;
    this.image = image;
    this.uri = uri;
    this.caption = caption;
    this.likes = likes;
    this.comment_list = comment_list;
    this.time = time;
    this.no_of_comment = no_of_comment;
  }
}
