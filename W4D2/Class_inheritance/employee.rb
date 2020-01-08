class Employee
  def initialize(name, title, salary, boss)
    @name = name
    @title = title
    @salary = salary
    @boss = boss
  end

  def bonus(multiplier)
    if !self.is_a?(Manager)
      bonus = salary * multiplier
    else
      queue = employees.dup
      counter = 0

      until queue.empty?
        node = queue.shift

        if node.is_a?(Manager)
          queue += node.employees
        end

        counter += node.salary 
      end

      bonus = counter * multiplier
    end

    bonus
  end

  attr_accessor :title, :salary, :boss
end