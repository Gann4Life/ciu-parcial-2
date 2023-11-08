import Dropdown from 'react-bootstrap/Dropdown';

const FilterDropdown = ({ tags, setFilterTag }) => {
	return (
		<Dropdown>
		<Dropdown.Toggle variant="success" id="dropdown-basic">
			Categories
		</Dropdown.Toggle>

		<Dropdown.Menu>
				{tags.map((tag, key) =>
					<Dropdown.Item key={key} onClick={() => setFilterTag(tag)}>{tag}</Dropdown.Item>)
				}
			
		</Dropdown.Menu>
		</Dropdown>
	);
}

export default FilterDropdown;