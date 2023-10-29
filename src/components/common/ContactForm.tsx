export const ContactForm: React.FC = () => {
  return (
    <form className='mx-auto max-w-md'>
      <div className='mb-4'>
        <label htmlFor='name' className='block text-gray-600'>
          Name:
        </label>
        <input
          type='text'
          name='name'
          className='w-full rounded border border-gray-300 p-2'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='email' className='block text-gray-600'>
          Email:
        </label>
        <input
          type='email'
          name='email'
          className='w-full rounded border border-gray-300 p-2'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='message' className='block text-gray-600'>
          Message:
        </label>
        <textarea
          name='message'
          className='w-full rounded border border-gray-300 p-2'
        />
      </div>
      <button type='submit' className='rounded bg-blue-500 p-2 text-white'>
        Submit
      </button>
    </form>
  )
}
