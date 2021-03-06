import { useState, useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { TiHeartFullOutline } from 'react-icons/ti';

export default function ExperiencesForm() {
  const router = useRouter();
  const [text, setText] = useState('');
  const [formState, setFormState] = useState('');

  const submitDisabled = useMemo(
    () => !text.length || formState === 'submitting' || formState === 'success',
    [text, formState]
  );

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setFormState('submitting');

      const res = await fetch('/api/experiences', {
        method: 'PUT',
        body: text,
      });
      setFormState('success');

      router.push('/experiences');
    },
    [text]
  );

  return (
    <form className='centered' onSubmit={onSubmit}>
      <h1 className='z-50 w-full text-6xl text-center text-accent-1'>
        What does joy feel like for you?
      </h1>
      <span className='w-full mx-10 z-auto'>
        <input
          tabIndex={1}
          className='text-5xl md:text-6xl relative z-50 w-full px-2 py-4 text-center bg-transparent transition-all duration-300 overlay-input-field'
          type='text'
          name='joy-input'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label className='z-0 overlay-input-label' htmlFor='joy-input' />
      </span>
      <div className='w-full flex justify-center'>
        <button
          type='submit'
          disabled={submitDisabled}
          tabIndex={2}
          className='flex items-center z-50 border-none px-8 py-4 mx-2 my-3 uppercase tracking-wide font-bold outline-none cursor-pointer relative transition-all duration-300'>
          {formState === 'submitting' ? (
            <AiOutlineLoading3Quarters className='mx-4 h-6 w-6 animate-spin' />
          ) : (
            <TiHeartFullOutline
              className={`h-6 w-6 ${
                formState === 'success' || !submitDisabled
                  ? 'text-gold-orange'
                  : 'text-gray-400'
              } transition-all duration-300 `}
            />
          )}
        </button>
      </div>
      <Link href='/experiences'>
        <a className='text-xs'>See other experiences</a>
      </Link>
    </form>
  );
}
