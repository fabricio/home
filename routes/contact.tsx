import { PageProps } from "$fresh/server.ts";

export default function Contact(props: PageProps) {
  return <div class="text(4xl gray-600)">You are in {props.route}</div>;
}
