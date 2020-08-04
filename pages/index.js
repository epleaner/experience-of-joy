import { useState, useCallback } from 'react';

export default function IndexPage() {
  const [text, setText] = useState('');

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      alert('i see' + text);
    },
    [text]
  );

  return (
    <form
      className='flex flex-wrap h-full w-full justify-center items-center'
      onSubmit={onSubmit}>
      <h1 className='w-full text-6xl text-center text-accent-1'>
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
      <button
        type='submit'
        disabled={!text.length}
        tabIndex={2}
        className='z-50 disabled:opacity-25 border-none px-8 py-2 mx-2 my-1 uppercase tracking-wide font-bold outline-none cursor-pointer relative transition-all duration-300 '>
        Submit
      </button>
    </form>
  );
}
