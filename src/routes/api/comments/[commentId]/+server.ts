import { json } from '@sveltejs/kit';
import { comments } from '$lib/comments';

export function GET(req) {
  const { params } = req;
  const { commentId } = params;
  const comment = comments.find((c) => c.id === Number.parseInt(commentId));
  return json(comment);
}

export async function PATCH(req) {
  const { params, request } = req;
  const { commentId } = params;
  const { text } = await request.json();
  const comment = comments.find((c) => c.id === Number.parseInt(commentId));
  comment!.text = text;
  return json(comment);
}

export async function DELETE(req) {
  const { params } = req;
  const { commentId } = params;
  const deletedComment = comments.find(
    (c) => c.id === Number.parseInt(commentId),
  );
  const index = comments.findIndex((c) => c.id === Number.parseInt(commentId));
  comments.splice(index, 1);
  return json(deletedComment);
}
