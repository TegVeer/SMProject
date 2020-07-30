export default class Comment {
  constructor(comment_id, name, image, comment_data, likes, time, post_id) {
    this.comment_id = comment_id;
    this.name = name;
    this.image = image;
    this.comment_data = comment_data;
    this.likes = likes;
    this.time = time;
    this.post_id = post_id;
  }
}
