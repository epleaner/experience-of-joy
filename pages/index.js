export default function IndexPage() {
  return (
    <div className='flex flex-wrap h-full w-full justify-center items-center'>
      <h1 className='w-full text-6xl text-center text-accent-1'>
        What does joy feel like for you?
      </h1>
      <span class='w-full mx-10 z-auto'>
        <input
          class='text-5xl md:text-6xl relative z-50 w-full px-2 py-4 text-center bg-transparent transition-all duration-300 overlay-input-field'
          type='text'
          name='joy-input'
        />
        <label class='z-0 overlay-input-label' for='joy-input' />
      </span>
      <button class='z-50 btn btn-5 btn-5a icon-remove'>
        <span>Submit</span>
      </button>
    </div>
  );
}
