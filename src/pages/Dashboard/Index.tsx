import React, { useState, FormEvent, useEffect } from 'react';

import {
  Title,
  Form,
  Repositories,
  Main,
  Comment,
  Comments,
  Display,
} from './styles';
import api from '../../services/api';

interface Comment {
  id: string;
  comment_body: string;
}

const Dashboard: React.FC = () => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);
  const [play, setPlay] = useState(false);

  async function handleAddComment(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const response = await api.post<Comment>('/', { commentBody: newComment });

    const revert = [...comments, response.data].reverse();

    setComments(revert);
  }

  async function handleTextToSpeech(tts: string): Promise<void> {
    setPlay(false);
    const response = await api.post('/ibm', { text: tts });

    if (response.status === 200) {
      setPlay(true);
    }
  }

  useEffect(() => {
    async function loadContent() {
      const response = await api.get<Comment[]>('/');
      const comment = response.data;
      setComments(comment);
    }

    loadContent();
  }, []);

  return (
    <Main>
      <Comment>
        <Title>Comentário</Title>
        <Form onSubmit={handleAddComment}>
          <textarea
            rows={15}
            value={newComment}
            onChange={change => setNewComment(change.target.value)}
            placeholder="Digite o seu comentário"
          />
          <button type="submit">Cadastrar</button>
        </Form>
      </Comment>
      <Comments>
        <Title>Comentários</Title>
        <Repositories>
          {comments.map(comment => (
            <Display key={comment.id}>
              <p>{comment.comment_body}</p>
              <button
                type="submit"
                onClick={() => {
                  handleTextToSpeech(comment.comment_body);
                }}
              >
                Ouvir
              </button>
            </Display>
          ))}
          {play && (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <audio
              src="http://localhost:3333/audio.wav"
              preload="none"
              autoPlay
            >
              {/* <track
                default
                kind="captions"
                srcLang="en"
                src="http://localhost:3333/audio.wav"
              /> */}
            </audio>
          )}
        </Repositories>
      </Comments>
    </Main>
  );
};

export default Dashboard;
